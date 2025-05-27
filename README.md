## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
- [Expo CNG](https://docs.expo.dev/workflow/continuous-native-generation/) is used in this app.

## Features

- View a list of products on the main screen, including the product title, price, and thumbnail;
- Filter products by category (e.g., electronics, clothing, groceries);
- Sort the products by price or rating;
- Click on a product to view detailed information, such as product description, brand, and stock availability;

## Future improvements

- The app currently handles errors in a generic way, but it is ready to include more specific error handling based on error codes. Therefore, it’s possible to handle additional error scenarios (bad request, network error, etc.);

- Implementation of product search by name;

- Implementation of Tests and Storybook;
