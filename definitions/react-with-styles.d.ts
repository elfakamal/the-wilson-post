declare module 'react-with-styles/lib/ThemedStyleSheet' {
  interface ThemedStyleSheetInterface {
    registerTheme: (theme: any) => void;
    registerInterface: (interface: any) => void;
  }
  
  const ThemedStyleSheet: ThemedStyleSheetInterface;
  export default ThemedStyleSheet;
}
