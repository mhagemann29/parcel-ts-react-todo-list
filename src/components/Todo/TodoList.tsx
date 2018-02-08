import * as React from 'react';
import styled from 'styled-components';

interface TodoListProps {
  todoArray: any;
}

const List = styled.ul`
  margin: 20px auto;
  padding: 15px;
  width: 300px;
  border: 1px solid #ddd;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  li {
    text-align: left;
    border: 1px solid #f6f6f6;
    list-style-type: none;
    padding: 15px;
  }
  li:hover {
    background: #eee;
  }
`;

const TodoList: React.SFC<TodoListProps> = (props) => {

  const todoArray = props.todoArray;

  return (
      <>
        <List>
            {todoArray.map(function(todo: string, index: number){
                  return <li key={ index }>{todo}</li>;
              })
            }
        </List>
      </>
  );
};

export default TodoList;