// import styled, { css } from 'styled-components';
import { styled } from '@stitches/react';

// interface ButtonProps {
//   size: 'big' | 'small';
// };

// const Button = styled.button<ButtonProps>`
//   background-color: pink;
//   padding: 12px;
//   border-radius: 8px;
//   border: 1px solid purple;

//   ${props => props.size === 'big' && css`
//     font-size: 64px;
//     padding: 40px;
//   `}
// `;

// o stitches tem uma forma diferente de lidar com a parte variantes(vários
// tamanhos, várias cores, vários formatos)
const Button = styled('button', {
  backgroundColor: 'pink',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid purple',

  variants: {
    size: {
      big: {
        fontSize: 64,
        padding: 20,
      },
      small: {
        fontSize: 10,
        padding: 6,
      },
    }
  }
});

function App() {
  return (
    // <div>
    //   <Button size="big">Hello World</Button>
    //   <Button>Hello World</Button>
    //   <Button size="small">Hello World</Button>
    // </div>

    <div className="h-screen flex justify-center items-center dark:bg-zinc-900">
      {
      /*
        no caso do tailwind a estilização vai ser feita utilizando classes
        asim com é feito no CSS tradicional
        mas as classes são classes utilitárias, ou seja, cada classe vai aplicar
        um estilo diferente
      */
      }

      {
      /* 
        os tamanhos no tailwind já são em rem, ou seja, isso já ajuda a trabalhar
        com acessibilidade
      */
      }
      <button className="w-full mx-4 sm:w-auto text-4xl bg-violet-500 py-4 px-8 rounded-lg text-white shadow-lg shadow-violet-400 hover:bg-violet-700 transition-colors animate-bounce">
        Hello World
      </button>
    </div>
  );
}

export default App
