import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { Itodo } from "components/todo/TodoService";
import React from "react";
import styled, { css } from "styled-components";

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: TodoItemProps) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={todo.done} onClick={handleToggle}>
        {todo.done && <CheckOutlined />}
      </CheckCircle>
      <Text done={todo.done}>
        <div>{todo.text}</div> <div>완료 목표일 : {todo.date || "없음"}</div>
      </Text>
      <Remove onClick={handleRemove}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 16px;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 16px;
  color: #119955;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

export default React.memo(TodoItem);
