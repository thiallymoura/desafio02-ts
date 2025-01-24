import { Box } from "@chakra-ui/react";
import { Header } from "./Header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Box minHeight="100vh" backgroundColor="teal">
        {children}
      </Box>
    </>
  );
};
















// import { Footer } from "./Footer"
// import { Header } from "./Header/Header"

// export const Layout = ({ children }: any) => {
//   return(
//     <>
//       <Header />
//       { children }
//       <Footer />
//     </>
//   )
// }
