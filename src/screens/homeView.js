import React from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends React.Component {
    render() {
        return (
            <ScrollView style={{
                backgroundColor: "#F8F8F8",
                paddingHorizontal: 20,
            }}>
                <Text style={styles.title}>Post Jobs</Text>
                <Text style={styles.text_job}>Find your best jobs</Text>
                <View style={styles.search_text}>
                    <TextInput
                        placeholder="What are you looking for?"
                        placeholderTextColor="#B0B0B0"
                        style={{
                            fontFamily: "Medium",
                            paddingHorizontal: 20
                        }}
                    />
                    <View style={styles.search_box}>
                        <Image source={require('../images/search.png')} />
                    </View>
                </View>
                <Text style={styles.text_popular}>Most Popular</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.card_style}>
                        <Image source={require('../images/pentool.png')} style={{ width: 150, height: 150 }} />
                         {/* click to view detail job */}
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Detail')}
                            style={styles.card_image}>
                            <Text style={{
                                color: "#000",
                                fontFamily: "SemiBold",
                                fontSize: 13,
                            }}>Software Developer</Text>
                            <View style={{ flexDirection: "row", marginTop: 4 }}>
                                <View style={styles.button_time}>
                                    <Text style={{
                                        color: "#B0B0B0",
                                        fontFamily: "Bold",
                                        fontSize: 13
                                    }}>Full time</Text>
                                </View>
                                <Text style={{
                                    color: "#000",
                                    fontFamily: "Bold",
                                    fontSize: 13,
                                    marginLeft: 25
                                }}>$50/h</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* remove when call api */}
                    <View style={{
                        backgroundColor: "#FFF",
                        height: 200,
                        width: 150,
                        borderRadius: 20,
                        marginTop: 35,
                        margin: 10
                    }}>
                        <Image source={require('../images/pentool.png')} style={{ width: 150, height: 150 }} />
                        <TouchableOpacity

                            onPress={() => this.props.navigation.navigate('Detail')}

                            style={{
                                backgroundColor: "#87ceeb",
                                height: 60,
                                borderRadius: 5,
                                marginTop: -10,
                                paddingHorizontal: 8,
                                paddingVertical: 8
                            }}>
                            <Text style={{
                                color: "#000",
                                fontFamily: "SemiBold",
                                fontSize: 13,
                            }}>Software Developer</Text>
                            <View style={{ flexDirection: "row", marginTop: 4 }}>
                                <View style={{
                                    backgroundColor: "#3E3C3C",
                                    paddingHorizontal: 5,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 5
                                }}>
                                    <Text style={{
                                        color: "#B0B0B0",
                                        fontFamily: "Bold",
                                        fontSize: 13
                                    }}>Full time</Text>
                                </View>

                                <Text style={{
                                    color: "#000",
                                    fontFamily: "Bold",
                                    fontSize: 13,
                                    marginLeft: 25
                                }}>$50/h</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        backgroundColor: "#FFF",
                        height: 200,
                        width: 150,
                        borderRadius: 20,
                        marginTop: 35,
                        margin: 5
                    }}>
                        <Image source={require('../images/pentool.png')} style={{ width: 150, height: 150 }} />
                        <TouchableOpacity

                            onPress={() => this.props.navigation.navigate('Detail')}

                            style={{
                                backgroundColor: "#87ceeb",
                                height: 60,
                                borderRadius: 5,
                                marginTop: -10,
                                paddingHorizontal: 8,
                                paddingVertical: 8
                            }}>
                            <Text style={{
                                color: "#000",
                                fontFamily: "SemiBold",
                                fontSize: 13,
                            }}>Software Developer</Text>
                            <View style={{ flexDirection: "row", marginTop: 4 }}>
                                <View style={{
                                    backgroundColor: "#3E3C3C",
                                    paddingHorizontal: 5,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 5
                                }}>
                                    <Text style={{
                                        color: "#B0B0B0",
                                        fontFamily: "Bold",
                                        fontSize: 13
                                    }}>Full time</Text>
                                </View>

                                <Text style={{
                                    color: "#000",
                                    fontFamily: "Bold",
                                    fontSize: 13,
                                    marginLeft: 25
                                }}>$50/h</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        backgroundColor: "#FFF",
                        height: 200,
                        width: 150,
                        borderRadius: 20,
                        marginTop: 35
                    }}>
                        <Image source={require('../images/pentool.png')} style={{ width: 150, height: 150 }} />
                        <TouchableOpacity

                            onPress={() => this.props.navigation.navigate('Detail')}

                            style={{
                                backgroundColor: "#87ceeb",
                                height: 60,
                                borderRadius: 5,
                                marginTop: -10,
                                paddingHorizontal: 8,
                                paddingVertical: 8
                            }}>
                            <Text style={{
                                color: "#000",
                                fontFamily: "SemiBold",
                                fontSize: 13,
                            }}>Software Developer</Text>
                            <View style={{ flexDirection: "row", marginTop: 4 }}>
                                <View style={{
                                    backgroundColor: "#3E3C3C",
                                    paddingHorizontal: 5,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 5
                                }}>
                                    <Text style={{
                                        color: "#B0B0B0",
                                        fontFamily: "Bold",
                                        fontSize: 13
                                    }}>Full time</Text>
                                </View>

                                <Text style={{
                                    color: "#000",
                                    fontFamily: "Bold",
                                    fontSize: 13,
                                    marginLeft: 25
                                }}>$50/h</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                {/*Add other job */}
                <Text style={{
                    fontFamily: "ExtraBold",
                    marginVertical: 20,
                    fontSize: 15
                }}>Other Recamment</Text>
                <View style={styles.text_recamment}>
                    <View style={styles.card_recamment}>
                        <Image source={require('../images/pentool.png')} style={{ width: 40, height: 40 }} />
                    </View>
                    <View style={{
                        paddingHorizontal: 20
                    }}>
                        <Text style={{
                            fontFamily: "ExtraBold",
                            fontSize: 13
                        }}>Graphic Designer</Text>
                        {/* click to view detail job */}
                        <View style={styles.recamment_item}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                                <Text style={{ fontFamily: "Medium", color: "#000", opacity: 0.5 }}>Part time</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{
                        fontFamily: "ExtraBold",
                        fontSize: 18,
                        marginLeft: 40,
                        marginTop: 10
                    }}>$5/h</Text>
                </View>
                {/* remove after call api */}
                <View style={{
                    backgroundColor: "#FFF",
                    marginTop: 10,
                    flexDirection: "row",
                    borderRadius: 10,
                    height: 60,
                    alignItems: "center",
                    paddingHorizontal: 20
                }}>

                    <View style={{
                        backgroundColor: "#DFDFDF",
                        borderRadius: 5,
                        height: 40,
                        width: 40,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Image source={require('../images/pentool.png')} style={{ width: 40, height: 40 }} />
                    </View>

                    <View style={{
                        paddingHorizontal: 20
                    }}>
                        <Text style={{
                            fontFamily: "ExtraBold",
                            fontSize: 13
                        }}>Graphic Designer</Text>
                        <View style={{
                            backgroundColor: "#87ceeb",
                            borderRadius: 5,
                            width: 70,
                            alignItems: "center",
                            marginVertical: 5
                        }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                                <Text style={{ fontFamily: "Medium", color: "#000", opacity: 0.5 }}>Part time</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <Text style={{
                        fontFamily: "ExtraBold",
                        fontSize: 18,
                        marginLeft: 40,
                        marginTop: 10
                    }}>$5/h</Text>
                </View>
                {/*  */}
                <View style={{
                    backgroundColor: "#FFF",
                    marginTop: 10,
                    flexDirection: "row",
                    borderRadius: 10,
                    height: 60,
                    alignItems: "center",
                    paddingHorizontal: 20
                }}>

                    <View style={{
                        backgroundColor: "#DFDFDF",
                        borderRadius: 5,
                        height: 40,
                        width: 40,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Image source={require('../images/pentool.png')} style={{ width: 40, height: 40 }} />
                    </View>

                    <View style={{
                        paddingHorizontal: 20
                    }}>
                        <Text style={{
                            fontFamily: "ExtraBold",
                            fontSize: 13
                        }}>Graphic Designer</Text>
                        <View style={{
                            backgroundColor: "#87ceeb",
                            borderRadius: 5,
                            width: 70,
                            alignItems: "center",
                            marginVertical: 5
                        }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                                <Text style={{ fontFamily: "Medium", color: "#000", opacity: 0.5 }}>Part time</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <Text style={{
                        fontFamily: "ExtraBold",
                        fontSize: 18,
                        marginLeft: 40,
                        marginTop: 10
                    }}>$5/h</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: "#B0B0B0",
        marginTop: 40,
        fontFamily: "Bold"
    },
    text_job: {
        fontFamily: "ExtraBold",
        fontSize: 18,
        marginTop: 13
    },
    search_text: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },
    search_box: {
        width: 30,
        height: 30,
        borderRadius: 8,
        marginLeft: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    text_popular: {
        fontFamily: "ExtraBold",
        marginTop: 20,
        fontSize: 15
    },
    card_style: {
        backgroundColor: "#FFF",
        height: 200,
        width: 150,
        borderRadius: 20,
        marginTop: 35
    },
    card_image: {
        backgroundColor: "#87ceeb",
        height: 60,
        borderRadius: 5,
        marginTop: -10,
        paddingHorizontal: 8,
        paddingVertical: 8
    },
    button_time: {
        backgroundColor: "#3E3C3C",
        paddingHorizontal: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    text_recamment: {
        backgroundColor: "#FFF",
        marginTop: 10,
        flexDirection: "row",
        borderRadius: 10,
        height: 60,
        alignItems: "center",
        paddingHorizontal: 20
    },
    card_recamment: {
        backgroundColor: "#DFDFDF",
        borderRadius: 5,
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    recamment_item: {
        backgroundColor: "#87ceeb",
        borderRadius: 5,
        width: 70,
        alignItems: "center",
        marginVertical: 5
    }
});