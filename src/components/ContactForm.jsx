import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    category: 'Other',
    favorite: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addContact(data);
    setData({
      firstName: '',
      lastName: '',
      phone: '',
      category: 'Other',
      favorite: false,
    });
  };

  return (
    <div className="w-25 bg-info-subtle p-3">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="firstName">
            Firstname
          </label>
          <input
            className="form-control"
            type="text"
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="lastName">
            Lastname
          </label>
          <input
            className="form-control"
            type="text"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <input
            className="form-control"
            type="tel"
            id="phone"
            name="phone"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="age">
            Age
          </label>
          <input
            className="form-control"
            type="age"
            id="age"
            name="age"
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="groupnumber">
            Group Number
          </label>
          <input
            className="form-control"
            type="groupnumber"
            id="groupnumber"
            name="groupnumber"
            value={data.groupnumber}
            onChange={(e) => setData({ ...data, groupnumber: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="category">
            Category
          </label>
          <select
            className="form-select"
            name="category"
            id="category"
            value={data.category}
            onChange={(e) => setData({ ...data, category: e.target.value })}
          >
            <option value="Other">Other</option>
            <option value="Junior">Junior</option>
            <option value="Middle">Middle</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="favorite"
            name="favorite"
            checked={data.favorite}
            onChange={(e) => setData({ ...data, favorite: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="favorite">
            Favorite
          </label>
        </div>
        <button className="btn btn-primary btn-block w-100">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
