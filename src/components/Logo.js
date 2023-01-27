import styled from 'styled-components';

const Logo = () => {
  return (
    <Wrapper>
      <span>Tee</span>riffic
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  font-size: 48px;
  margin-bottom: 0;
  color: var(--clr-grey-1);
  span {
    color: var(--clr-primary-5);
  }
`;

export default Logo;
