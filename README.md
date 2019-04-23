# LocalStorage in JavaScript

LocalStorage is a type of web storage that allows Javascript websites and apps to store and access data right in the browser with no expiration date. This means the data stored in the browser will persist even after the browser window has been closed.

## How To Use LocalStorage in JavaScript

To use LocalStorage in your web applications, there are 5 methods to choose from:

```
setItem(): Add key and value to LocalStorage

getItem(): Retrieve a value by the key from LocalStorage

removeItem(): Remove an item by key from LocalStorage

clear(): Clear all LocalStorage

key(): Passed a number to retrieve nth key of a LocalStorage

```

### setItem()

This method just as the name implies allows you to store values in the LocalStorage object.

It takes two parameters, a key and a value. The key can be referenced later to fetch the value attached to it.

```
window.localStorage.setItem('name', 'Atul Kumar');

```

Where **name** is the key and **Atul Kumar** is the value. Also note that LocalStorage can only store strings.

To store arrays or objects you would have to convert them to strings.

To do this we use the `JSON.stringify()` method before passing to `setItem()` .

```
const person = {
    name: "Atul Kumar",
    location: "India",
}
window.localStorage.setItem('user', JSON.stringify(person));

```

### getItem()

The getItem() method allows you to access the data stored in the browser’s localStorage object.

It accepts only one parameter which is the `key` and returns the `value` as a string.

To retrieve the user key stored above:

```
“{“name”:”Atul Kumar”,”location”:”India”}”

```

To use this value, you would have convert it back to an object.

To do this, we make use of `JSON.parse()` method which converts a JSON string into a Javascript Object.

```
JSON.parse(window.localStorage.getItem('user'));

```

### removeItem()

The removeItem() method when passed a key name, will remove that key from the storage if it exists. If there is no item associated with the given key, this method will do nothing.

```
window.localStorage.removeItem('name');
```

### clear()

This method, when invoked clears the entire storage of all records for that domain. It does not receive any parameters.

```
window.localStorage.clear();
```

### key()

The key() method comes in handy in situations where you need to loop through keys and allows you pass a number or index to local storage to retrieve the name of the key.

```
var KeyName = window.localStorage.key(index);
```

## LocalStorage JavaScript Browser Support

LocalStorage as a type of web storage is an HTML5 specification. It is supported by major browsers including IE8. To be sure the browser supports LocalStorage, you can check using the following snippet:

```
if (typeof(Storage) !== "undefined") {
    // Code for localStorage
} else {
    // No web storage Support.
}
```

## LocalStorage JavaScript Limitations

As easy as it is to use LocalStorage, it is also easy to misuse it. The following are limitations and also ways to NOT use localStorage:

- Do not store sensitive user information in localStorage
- It is not a substitute for a server based database as information is only stored on the browser
- LocalStorage is limited to 5MB across all major browsers
- LocalStorage is quite insecure as it has no form of data protection and can be accessed by any code on your web page.
- LocalStorage is synchronous. Meaning each operation called would only execute one after the other.

With these, we have been armed with the power of LocalStorage in our web applications.
