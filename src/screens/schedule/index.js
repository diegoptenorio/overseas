import React, { useState } from 'react';
import { View } from 'react-native';
//import DatePicker from 'react-native-datepicker'
import { Header } from '../../features';
import style from './style';

export const Schedule = () => {
    const [date, setDate] = useState({ date: "2016-05-15" });
    return (
        <View>
            <Header title={'Agendar'} />
            <View style={style.Container}>
                {/* <DatePicker
                    style={{ width: 200 }}
                    date={date.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => { setDate({ date: date }) }}
                /> */}
            </View>
        </View>
    )
};