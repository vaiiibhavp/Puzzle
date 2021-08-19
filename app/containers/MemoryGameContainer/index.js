import React, { Component } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { colors, messages } from '../../styles';
import { styles } from './styles'

export class MemoryGameContainer extends Component {
    constructor(props) {
        super(props);
        this.alphabetList = [{ name: "A", isSelected: false }, { name: "B", isSelected: false },
        { name: "C", isSelected: false }, { name: "D", isSelected: false },
        { name: "E", isSelected: false }, { name: "F", isSelected: false },
        { name: "G", isSelected: false }, { name: "H", isSelected: false },
        { name: "A", isSelected: false }, { name: "B", isSelected: false },
        { name: "C", isSelected: false }, { name: "D", isSelected: false },
        { name: "E", isSelected: false }, { name: "F", isSelected: false },
        { name: "G", isSelected: false }, { name: "H", isSelected: false }]
        this.state = {
            matches: 0,
            turns: 0,
            randomGeneratedList: [],
            firstIndex: -1,
            secondIndex: -1
        }
    }

    componentDidMount() {
        this.randomArrayShuffle()
    }

    randomArrayShuffle = () => {
        let tempArray = this.alphabetList.slice()
        var currentIndex = tempArray.length, temporaryValue, randomIndex
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = tempArray[currentIndex];
            tempArray[currentIndex] = tempArray[randomIndex];
            tempArray[randomIndex] = temporaryValue;
        }

        this.setState({ randomGeneratedList: tempArray.slice() })
    }

    onItemClick = (item, index) => {
        const { firstIndex, secondIndex, randomGeneratedList, matches, turns } = this.state
        const newState = {}

        if (item.isSelected || (firstIndex != -1 && firstIndex == index)) return

        if (firstIndex == -1) {
            newState.firstIndex = index
        } else if (firstIndex != -1 && secondIndex == -1) {
            newState.secondIndex = index
        }

        this.setState(newState, () => {
            if (firstIndex != -1 && this.state.secondIndex != -1) {
                setTimeout(() => {
                    const newState = {}
                    if (randomGeneratedList[firstIndex].name === randomGeneratedList[this.state.secondIndex].name) {
                        randomGeneratedList[firstIndex].isSelected = true
                        randomGeneratedList[this.state.secondIndex].isSelected = true
                        newState.randomGeneratedList = this.state.randomGeneratedList
                        newState.matches = matches + 1
                    }

                    newState.turns = turns + 1
                    newState.firstIndex = -1
                    newState.secondIndex = -1

                    this.setState(newState, () => {
                        if (this.state.matches == randomGeneratedList.length / 2) {
                            alert("Game Over")
                        }
                    })
                }, 400)
            }
        })
    }

    renderItem = ({ item, index }) => {
        const { firstIndex, secondIndex } = this.state

        return (
            <TouchableOpacity activeOpacity={1}
                style={[styles.cardContainer, {
                    backgroundColor: (firstIndex == item || secondIndex == item) ?
                        colors.CARD_ENABLED_BG : item.isSelected ?
                            colors.CARD_VIEWED_BG : colors.CARD_DISABLE_BG
                }]}
                onPress={() => this.onItemClick(item, index)}>
                <Text style={styles.alphabetText}>
                    {(firstIndex == index || secondIndex == index) ? item.name : ""}
                </Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { matches, turns } = this.state

        return (
            <View style={styles.container}>
                <View style={styles.matchesContainer}>
                    <Text style={styles.matchesTextLbl}>
                        {messages.MSG_MATCHES}
                        <Text style={styles.matchesText}>{matches}</Text>
                    </Text>
                    <Text style={styles.matchesTextLbl}>
                        {messages.MSG_TURNS}
                        <Text style={styles.matchesText}>{turns}</Text>
                    </Text>
                </View>
                <FlatList
                    style={styles.flatListContainer}
                    contentContainerStyle={styles.contentContainerStyle}
                    showsVerticalScrollIndicator={false}
                    numColumns={4}
                    data={this.state.randomGeneratedList}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        )
    }
}

export default MemoryGameContainer
