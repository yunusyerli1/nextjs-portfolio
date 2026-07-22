import contactApi from "../base/axios-contact";

export const contactService = {
  createContact: (data: any) =>
    contactApi
      .post("/contacts", data)
      .then((res) => res.data),
};
