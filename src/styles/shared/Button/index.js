import styled from 'styled-components';

export default styled.button`
  padding: 0 15px;
  display: inline-block;
  min-width: 130px;
  height: 30px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  transition: all .5s;

  ${props => {
      switch (props.styleType) {
        case 'green':
          return `
            background-color: #fff;
            color: #27ae60;
            border: 1px solid #27ae60;

            &:hover {
              background-color: #27ae60;
              color: #fff;
              border: 1px solid #fff;
            }
          `;
      
        default:
          return `
            background-color: #eee;
            color: #555;
            border: 1px solid #555;
            
            &:hover {
              background-color: #999;
              color: #eee;
              border: 1px solid #eee;
            }
          `;
      }
    }
  }
`;
