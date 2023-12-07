const Contact = () => {
  return (
    <>
      <h1 className="font-bold text-2xl p-4 m-4 text-center">
        Contact Us Page
      </h1>
      <form>
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="Message"
        />
        <button className="border border-black rounded-lg m-2 p-2 bg-blue-100">
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
