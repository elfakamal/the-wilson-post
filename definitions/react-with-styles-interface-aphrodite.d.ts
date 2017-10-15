declare module 'react-with-styles-interface-aphrodite.d' {
  interface Aphrodity {
    resolve: (stylesArray: any) => {
      [x: string]: any;
      className: string;
    };

    create: (stylesObject: any) => {
      [x: string]: any;
    };
  }
  
  const aphrodite: Aphrodity;
  export default aphrodite;
}
