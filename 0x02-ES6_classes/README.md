Here's a short README for each file:

### `0-classroom.js`

**Purpose**: Defines the `ClassRoom` class.

**Description**: 
- `ClassRoom` accepts a single parameter `maxStudentsSize` and assigns it to the private attribute `_maxStudentsSize`.
- This file is used to create instances representing different classroom sizes.

---

### `1-make_classrooms.js`

**Purpose**: Initializes an array of `ClassRoom` objects.

**Description**: 
- Contains a function `initializeRooms` that returns an array of three `ClassRoom` objects with sizes 19, 20, and 34.
- The function is useful for setting up predefined classroom sizes in an application.

---

### `2-hbtn_course.js`

**Purpose**: Defines the `HolbertonCourse` class.

**Description**: 
- The class accepts `name`, `length`, and `students` as attributes and stores them as private attributes `_name`, `_length`, and `_students`.
- Getters and setters are implemented for each attribute to ensure proper data validation.

---

### `3-currency.js`

**Purpose**: Defines the `Currency` class.

**Description**: 
- The class accepts `code` and `name` as attributes and stores them as private attributes `_code` and `_name`.
- Includes a method `displayFullCurrency` that returns the full currency name in the format `name (code)`.

---

### `4-pricing.js`

**Purpose**: Defines the `Pricing` class.

**Description**: 
- The class accepts `amount` and `currency` as attributes and stores them as private attributes `_amount` and `_currency`.
- Includes a method `displayFullPrice` that returns a formatted string of the full price.
- A static method `convertPrice` is provided to convert the price based on a given conversion rate.

---

### `5-building.js`

**Purpose**: Defines the abstract `Building` class.

**Description**: 
- The class accepts `sqft` as an attribute and stores it as a private attribute `_sqft`.
- Contains a mandatory abstract method `evacuationWarningMessage` that must be implemented by any class extending `Building`.
- Throws an error if the method is not implemented by a subclass.

---

### `6-sky_high.js`

**Purpose**: Defines the `SkyHighBuilding` class, extending `Building`.

**Description**: 
- The class accepts `sqft` and `floors` as attributes, storing them as private attributes `_sqft` and `_floors`.
- Overrides the `evacuationWarningMessage` method to return a message indicating the number of floors to evacuate.

---

### `7-airport.js`

**Purpose**: Defines the `Airport` class.

**Description**: 
- The class accepts `name` and `code` as attributes and stores them as private attributes `_name` and `_code`.
- Overrides the `toString` method to return the airport code when the object is converted to a string.

---

### `8-hbtn_class.js`

**Purpose**: Defines the `HolbertonClass` class.

**Description**: 
- The class accepts `size` and `location` as attributes and stores them as private attributes `_size` and `_location`.
- When cast to a `Number`, the class returns `size`, and when cast to a `String`, it returns `location`.

---

### `9-hoisting.js`

**Purpose**: Defines the `HolbertonClass` and `StudentHolberton` classes, and creates a list of students.

**Description**: 
- `HolbertonClass` stores information about a class year and location.
- `StudentHolberton` stores information about a student's first name, last name, and their associated `HolbertonClass`.
- A list of student instances is created and exported as `listOfStudents`, containing details of each student and their class.

---

### `10-car.js`

**Purpose**: Defines the `Car` class.

**Description**: 
- The class accepts `brand`, `motor`, and `color` as attributes and stores them as private attributes `_brand`, `_motor`, and `_color`.
- Implements a `cloneCar` method that returns a new instance of the `Car` class with the same attributes.
- The method uses JavaScript `Symbol` to ensure the cloning process is secure and unique.
