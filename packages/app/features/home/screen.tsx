import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { createStyleSheet, useStyles } from 'app/provider/styles'
import { TextLink } from 'solito/link'

export const HomeScreen = () => {
    const { styles, breakpoint, theme } = useStyles(stylesheet)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return isClient ? (
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome to Expo + Next.js + Unistyles 👋
            </Text>
            <Text>
                Current breakpoint: {breakpoint}
            </Text>
            <Text>
                I like {theme.colors.barbie} color
            </Text>
            <View style={styles.linksContainer}>
                <TextLink href="/user/unistyles">
                    Go to magic place 🦄
                </TextLink>
            </View>
        </View>
    ) : null
}

const stylesheet = createStyleSheet(theme => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: {
            xs: theme.colors.oak,
            md: theme.colors.aloes
        }
    },
    text: {
        fontSize: 16,
        color: theme.colors.typography
    },
    linksContainer:{
        display: {
            xs: 'none',
            xl: 'flex'
        },
        flexDirection: 'row'
    }
}))
