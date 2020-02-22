import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background: #38c172;
  width: ${props => props.width || '200px'};
  height: ${props => props.heigth || '50px'};
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

export const Text = styled.Text`
  color: #fff;
`;
