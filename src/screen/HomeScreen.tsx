import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

const HomeScreen = ({ navigation }: any) => {
  return <Container>
    <Header>
      <Left>
        <Button onPress={() => {
          navigation.toggleDrawer();
        }} transparent>
          <Icon type="Entypo" name="menu" />
        </Button>
      </Left>
      <Body>
        <Title></Title>
      </Body>
      <Right />
    </Header>
    <Content>
      <Text>
        This is Content Section
    </Text>
    </Content>
    <Footer>
      <FooterTab>
        <Button full>
          <Text>Footer</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
}

export default HomeScreen;