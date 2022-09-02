import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath : 'contactsApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://62f555c6ac59075124d000e0.mockapi.io',
    }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts : builder.query({
        query: () => '/contacts',
    providesTags: ['Contacts'],
    }),
    addContact : builder.mutation({
        query: newContact => ({
        url:  `/contacts`,
        method: 'POST',   
        body : newContact,
        }),
    invalidatesTags: ['Contacts'],
 }),
    deleteContact : builder.mutation({
        query: contactId =>({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
    }),
    invalidatesTags: ['Contacts'],
  })
 }),
})


export const { 
    useGetContactsQuery, 
    useAddContactMutation, 
    useDeleteContactMutation, } 
    = contactsApi;