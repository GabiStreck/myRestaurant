import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import styles from '../styles/counterChip';

interface CounterChipProps {
    counter: number;
    onMinimusChange: () => void;
    onMaxChange: () => void;
}

const CounterChip: FC<CounterChipProps> = ({ onMinimusChange, onMaxChange, counter }) => {
    return (
        <View style={styles.volumeContainer}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onMinimusChange} style={styles.button}>
                    <MinusIcon size={20} strokeWidth={3} color={'white'} />
                </TouchableOpacity>
                <Text style={styles.counterText}>{counter}</Text>
                <TouchableOpacity onPress={onMaxChange} style={styles.button}>
                    <PlusIcon size={20} strokeWidth={3} color={'white'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CounterChip;
