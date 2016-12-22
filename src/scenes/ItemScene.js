import React, { Component } from 'react'
import { ListView, StyleSheet, View } from 'react-native'

import ActionButton from 'react-native-action-button'

import ItemCard from '../components/ItemCard'
import AddItemModal from '../components/AddItemModal'
import { colors } from '../style'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

export default class ItemScene extends Component {
  render () {
    return (
      <View style={styles.wrapper}>

        <ListView
          style={styles.list}
          dataSource={ds.cloneWithRows(this.props.items)}
          renderRow={item => <ItemCard title={item.title} category={item.category} publish_date={item.publish_date} />}
          enableEmptySections
        />

        <AddItemModal
          ref={'addItemModal'}
          onConfirm={this.props.addItem}
        />

        <ActionButton
          buttonColor='seagreen'
          onPress={() => this.refs.addItemModal.openModal()}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.background
  },
  list: {
    flex: 1
  }
})

ItemScene.propTypes = {
  addItem: React.PropTypes.func,
  items: React.PropTypes.array
}
