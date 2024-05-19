import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
    return (
        <Drawer>
            <Drawer.Screen
                name="settings"
                options={{
                    drawerLabel: "Settings",
                    title: "Settings",
                }}
            />
            <Drawer.Screen
                name="ask"
                options={{
                    drawerLabel: "ask",
                    title: "ask",
                }}
            />
            <Drawer.Screen
                name="logout"
                options={{
                    drawerLabel: "Logout",
                    title: "Logout",
                }}
            />
        </Drawer>
    );
}
