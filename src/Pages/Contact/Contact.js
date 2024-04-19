import React from 'react';

const Contact = () => {
    return (
        <div className='bg-primary px-10 py-14 m-20'>
          <div className='text-center pb-14 text-white'>
            <p className='text-xl font-bold  bg-clip-text '>
              Contact Us
            </p>
            <h1 className='text-xl'>We welcome queries, feedback and suggestions. We want to hear from you!</h1>
          </div>
          <div className='grid grid-cols-1 justify-items-center gap-5'>
            <input
              type='text'
              placeholder='Email Address'
              className='input w-full max-w-md'
            />
            <input
              type='text'
              placeholder='Subject'
              className='input w-full max-w-md'
            />
            <textarea
              className='textarea w-full max-w-md'
              placeholder='Your message'
              rows={6}
            ></textarea>
            <button className='btn btn-success'>Submit</button>
          </div>
        </div>
    );
};

export default Contact;