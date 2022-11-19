import { VStack, Image, Text, Center } from 'native-base'

import backgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

export function SignIn(){
    return (
        <VStack flex={1} bg="gray.700">
            <Image 
                source={backgroundImg} 
                alt="Pessoas treinando"
                resizeMode="contain"
                position="absolute"
            />
            
            <Center my={24}>
                <LogoSvg />

                <Text color="gray.100" fontSize="sm">
                    Treine sua mente e o corpo
                </Text>                
            </Center>


        </VStack>
    )
}