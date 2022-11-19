import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

type AuthRoutes = {
    signIn: undefined,
    signUp: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export function AuthRoutes(){
    <Navigator>
        <Screen
            name="signIn"
            component={SignIn}
        />

        <Screen
            name="signUp"
            component={SignUp}
        />
    </Navigator>
}