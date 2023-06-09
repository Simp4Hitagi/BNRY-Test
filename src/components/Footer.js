import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function CustomFooter() {
  const year = new Date();
  let currentYear = year.getFullYear()
  return (
    <MDBFooter className='bg-light text-center text-white w-100' style={{height: '100%'}}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/deno-rautenbach-b1698018a'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/Simp4Hitagi/BNRY-Test'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
    {/* set year to be dynamic */}
      <div className='text-center p-3 bg-dark' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {currentYear} Copyright:
        <a className='text-white' href='https://github.com/Simp4Hitagi'>
          Deno Rautenbach
        </a>
      </div>
    </MDBFooter>
  );
}