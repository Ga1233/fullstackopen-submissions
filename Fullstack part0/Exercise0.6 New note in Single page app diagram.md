# Exercise 0.6: New note in SPA diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user types a note and clicks the 'Save' button
    
    Note right of browser: The JavaScript code handles the event, adds the note to the local list, and re-renders the UI

    browser->>server: POST [https://studies.cs.helsinki.fi/exampleapp/new_note_spa](https://studies.cs.helsinki.fi/exampleapp/new_note_spa)
    activate server
    Note left of server: The server saves the new note to the database
    server-->>browser: 201 Created (JSON: {"message":"note created"})
    deactivate server

    Note right of browser: The browser stays on the same page; no further requests are made