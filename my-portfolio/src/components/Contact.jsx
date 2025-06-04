export default function Contact() {
  return (
    <>
      <h1 className='myself' style={{ marginTop: '150px' }}>
        Contact <span style={{ color: 'rgb(161, 161, 159)' }}>Info</span>
      </h1>
      <div className='jayy'>
        <h5>
          Let's talk about your{' '}
          <span style={{ color: 'rgb(250, 250, 243)' }}>project</span>:
        </h5>
        <br />
        <label>Name :</label>
        <input type='text' />
        <br />
        <br />
        <label>Email:</label>
        <input type='email' />
        <br />
        <br />
        <label>Message :</label>
        <textarea rows='4' cols='50'></textarea>
        <br />
        <br />
        <button className='btn btn-primary btn-sm'>
          <b>Send message</b>
        </button>
      </div>
    </>
  );
}
