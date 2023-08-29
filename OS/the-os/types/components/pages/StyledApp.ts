export type Theme={
    colors:{
      primary:string;
    }
  }
  
  export type StyledAppProps={
    children: React.ReactNode; // Ensure that children property is defined
    theme?:Theme;

  };