import React from 'react';
import { Content, Text, Container, Button } from 'native-base';

const DrawerScreen = ({ navigation }: any) => {
  return <Container>
    <Content>
      <Text>
        This is Content Section
      </Text>
      <Button onPress={() => navigation.navigate('Home')} full>
        <Text>Footer</Text>
      </Button>
    </Content>
  </Container>
}

export default DrawerScreen;