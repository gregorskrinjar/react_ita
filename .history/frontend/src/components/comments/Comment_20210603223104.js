import React, { useState, useRef } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { projectFirestore, timestamp } from '../../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Commentar = ({ commentImg }) => {

  console.log(commentImg.id);
  const messagesRef = projectFirestore.collection('messages');
  console.log(messagesRef);
  const query = messagesRef.orderBy('createdAt').limit(10);

  const [messages] = useCollectionData(query, { idField: 'id' });
  console.log(messages)
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    await messagesRef.add({
      text: formValue,
      createdAt: timestamp(),
      imgId: commentImg.id
    });

    setFormValue('');
    //dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (

    <Comment.Group>
      <Header as='h3' dividing>
        Comments
    </Header>

      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Matt</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>
            {messages && messages.map((msg, index) => {
              if (msg.imgId === commentImg.id) {
                return <p>{msg.text}</p>
              }
            })}
          </Comment.Text>
          {/* <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions> */}
        </Comment.Content>
      </Comment>

      <Form onSubmit={sendMessage}>
        <Form.TextArea value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
        <Button content='Add Reply' labelPosition='left' icon='edit' primary type="submit" disabled={!formValue} />
      </Form>
    </Comment.Group>
  )
}

export default Commentar;
