import { Box, Button, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FaTicketAlt, FaMusic, FaCalendarAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" my={10}>
        <Heading as="h1" size="2xl" mb={6}>
          DJ Party Planner
        </Heading>
        <Text fontSize="xl" mb={4}>
          Plan and Experience the Best DJ Parties Around!
        </Text>
        <Button rightIcon={<FaTicketAlt />} colorScheme="purple" size="lg">
          Buy Tickets Now
        </Button>
      </Flex>

      <Stack spacing={8} my={10}>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Upcoming Events
          </Heading>
          <Flex gap={6}>
            <EventCard date="2023-10-30" title="Halloween DJ Night" description="Celebrate this Halloween with the best DJ in town and a night full of surprises!" />
            <EventCard date="2023-12-31" title="New Year's Eve Bash" description="Ring in the new year with an unforgettable party experience!" />
          </Flex>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Past Parties
          </Heading>
          <Flex gap={6}>
            <Image src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaiUyMHBhcnR5JTIwY3Jvd2R8ZW58MHx8fHwxNzE0MDk1MDY4fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" borderRadius="md" />
            <Image src="https://images.unsplash.com/photo-1519736927049-de9d69a15bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaiUyMHBlcmZvcm1pbmclMjBhdCUyMHBhcnR5fGVufDB8fHx8MTcxNDA5NTA2OXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" borderRadius="md" />
          </Flex>
        </Box>
      </Stack>
    </Container>
  );
};

const EventCard = ({ date, title, description }) => (
  <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="sm">
    <Flex align="center" mb={2}>
      <FaCalendarAlt />
      <Text ml={2} fontWeight="bold">
        {date}
      </Text>
    </Flex>
    <Heading as="h3" size="md">
      {title}
    </Heading>
    <Text mt={4}>{description}</Text>
    <Button mt={4} rightIcon={<FaMusic />} colorScheme="teal">
      More Info
    </Button>
  </Box>
);

export default Index;
