import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroBcg from '../assets/hero-bcg.jpeg';
import heroBcg2 from '../assets/hero-bcg-2.jpeg';

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          Wear your style <br />
          make a statement
        </h1>
        <p>
          Our company believes that fashion is a form of self-expression.Whether
          you want to show off your personality, make a political statement, or
          just look good, our t-shirts are the perfect way to do it. So, wear
          your style and make a statement with our high-quality, comfortable,
          and trendy t-shirts.
        </p>
        <Link to='/products' className='btn hero-btn'>
          Shop Now
        </Link>
      </article>
      <article className='img-container'>
        <img
          src={heroBcg}
          alt='A woman wearing a white colored Teeriffic t-shirt'
          className='main-img'
        />
        <img
          src={heroBcg2}
          alt='A man wearing red colored Teeriffic t-shirt'
          className='accent-img'
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
  @media (max-width: 380px) {
    article {
      padding: 32px 0;
    }
  }
`;

export default Hero;
