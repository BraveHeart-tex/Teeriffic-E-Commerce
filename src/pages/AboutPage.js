import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='Elegant Desk' />
        <article>
          <div className='title'>
            <h2>Our Story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Our story begins with a passion for fashion and a desire to empower
            individuals to express themselves through style. We started out as a
            small team with a dream of creating high-quality, stylish t-shirts
            that cater to all tastes and personalities. We quickly grew in
            popularity, thanks to our commitment to using the highest quality
            materials and our dedication to providing a wide range of designs.
          </p>
          <p>
            Our team is made up of individuals from different backgrounds and
            cultures, which is reflected in the diversity of our designs. We
            believe that fashion should be inclusive and everyone should have
            the opportunity to express themselves through style. As we continue
            to grow and evolve, we remain committed to our roots and dedicated
            to making a positive impact in the fashion industry. Join us on our
            journey and make a statement with our t-shirts.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
