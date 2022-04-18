import React from 'react'
import {Text,View, Pressable} from 'react-native'

function CategoryGridTile({title, color}) {
    return(
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile