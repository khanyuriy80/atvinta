
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        coinCount: 30,
        isAddFiveCoin: false,
        market: [
            {
                id: 1,
                title: 'Биорука',
                buyPrice: 7,
                sellPrice: 5,
                count: 7
            },
            {
                id: 2,
                title: 'Микрочип',
                buyPrice: 5,
                sellPrice: 3,
                count: 7
            },
            {
                id: 3,
                title: 'Душа',
                buyPrice: 25,
                sellPrice: 15,
                count: 7
            }
        ],
        warehouse: [
            {
                id: 1,
                title: 'Биорука',
                buyPrice: 7,
                sellPrice: 5,
                count: 0
            },
            {
                id: 2,
                title: 'Микрочип',
                buyPrice: 5,
                sellPrice: 3,
                count: 0
            },
            {
                id: 3,
                title: 'Душа',
                buyPrice: 25,
                sellPrice: 15,
                count: 0
            }
        ],

        selectedTypeRobot: 'design',
        selectedStabilizerRobot: 'male',

        details: {
            biohand1: false,
            biohand2: false,
            biohand3: false,
            biohand4: false,

            microchip1: false,
            microchip2: false,
            microchip3: false,
            microchip4: false,

            soul: false
        },

        robotCompleted: false,

        modalVisible: false



    },

    mutations: {
        addCoin(state) {
            if (state.isAddFiveCoin) { state.coinCount < 96 && (state.coinCount = state.coinCount + 5) }
            else { state.coinCount < 100 && state.coinCount++ }
            if (state.isAddFiveCoin && state.coinCount >= 96) {
                state.modalVisible = true
            }
            if (!state.isAddFiveCoin && state.coinCount >= 100) {
                state.modalVisible = true
            }
        },
        changeAddCoin(state) {
            state.isAddFiveCoin = !state.isAddFiveCoin
        },
        buy(state, detail) {
            if (state.coinCount >= detail.buyPrice) {
                if (!state.warehouse.some(item => item.id === detail.id)) {
                    detail.count = 1
                    state.warehouse.push(detail)
                }
                else {
                    state.warehouse.find(item => item.id === detail.id).count++
                }
                state.coinCount = state.coinCount - detail.buyPrice
            }
        },
        sell(state, detail) {
            const selectedDetail = state.warehouse.find(item => item.id === detail.id)
            if (selectedDetail.count > 0) {
                selectedDetail.count--
                state.coinCount = state.coinCount + detail.sellPrice
            }
        },

        changeTypeRobot(state, type) {
            state.selectedTypeRobot = type
        },

        changeStabilizerRobot(state, stabilizer) {
            state.selectedStabilizerRobot = stabilizer
        },

        installDetail(state, detail) {
            const selectedDetail = state.warehouse.find(item => item.id === detail.id)
            if (state.details[detail.name]) {
                state.details[detail.name] = false
                selectedDetail.count++
            } else if (selectedDetail.count > 0) {
                state.details[detail.name] = true
                selectedDetail.count--
            }

        },

        robotComplete(state) {
            state.robotCompleted = true
            state.coinCount = state.coinCount - 10
            Object.keys(state.details).forEach(detail => {
                console.log(state.details[detail])
                state.details[detail] = false
            })
        },

        showModal(state) {
            state.modalVisible = true

        },

        hideModal(state) {
            state.modalVisible = false
        }
    },

    getters: {
        selectedRobotImgUrl(state, getters) {
            return `img/${state.selectedStabilizerRobot}-${state.selectedTypeRobot}-${getters.robotStatus}.png`
        },
        robotStatus(state) {
            if (state.robotCompleted) return "on"
            return Object.keys(state.details).some(detail => !state.details[detail]) ? "disable" : "off"
        }

    }

})