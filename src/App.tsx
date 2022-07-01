import styled, { css } from 'styled-components';

interface ButtonProps {
  size: 'big' | 'small';
};

const Button = styled.button<ButtonProps>`
  background-color: pink;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid purple;

  ${props => props.size === 'big' && css`
    font-size: 64px;
    padding: 40px;
  `}
`;

function App() {
  return (
    <div>
      <Button size="big">Hello World</Button>
      <Button size="small">Hello World</Button>
    </div>
  );
}

export default App
