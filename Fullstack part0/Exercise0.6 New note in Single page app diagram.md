# Exercise 0.6: New note in SPA diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user types a note and clicks the 'Save' button
    
    Note right of browser: JavaScript adds the note to the local list and re-renders the UI

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of server: The server saves the new note
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: The browser stays on the same page
