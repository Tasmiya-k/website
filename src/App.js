import {
  ChakraProvider,
  extendTheme,
  useColorMode,
  ColorModeProvider,
  Box
} 
from "@chakra-ui/react";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Program from './components/Program';
import Team from './components/Team';
import Sponsor from './components/PastSponsors';
import Upcoming from './components/Upcoming';
import GetInvolvedSection from './components/GetInvolved';
import Footer from './components/Footer';
import SubscriptionSection from './components/Email';

function App() {
  // Define the dark theme
const darkTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

return (
<ChakraProvider theme={darkTheme}>
      <Box minHeight="100vh">
        <Navbar />
        <LandingPage />
        < About />
        < Program />
        < Upcoming />
        < GetInvolvedSection />
        < Sponsor />
        < Team />
        < SubscriptionSection />
        < Footer />
        {/* Your other components and routes go here */}
      </Box>
    </ChakraProvider>
  );
}

export default App