import endpoints from '../../api/endpoints'

export default {
    async findRelationship({ commit, state, rootState }, { userID, friendID }) {
        try {
            commit('setRelationshipLoading', true)
            commit('setRelationshipError', null)

            let response = await endpoints.findRelationship(userID, friendID)

            const statusCode = rootState.referenceData.relationshipStatusCodes.find(
                statusCode => statusCode.code === response.statusId
            )
            return {
                statusCode: statusCode,
                lastUserActionID: response.actionId
            }
        } catch (error) {
            commit('setRelationshipError', error)
        } finally {
            commit('setRelationshipLoading', false)
        }
    },

    async updateFriendship({ commit }, request) {
        try {
            commit('setFriendshipUpdating', true)
            commit('setFriendshipUpdatingError', null)
            let response = await endpoints.updateRelationship(request)
            return response.statusId
        } catch (error) {
            commit('setFriendshipUpdatingError', error)
        } finally {
            commit('setFriendshipUpdating', false)
        }
    },

    async createFriendship({ commit }, request) {
        try {
            commit('setCreatingFriendship', true)
            commit('setFriendshipCreatingError', null)
            let response = await endpoints.createRelationship(request)
            return response.statusId
        } catch (error) {
            commit('setFriendshipCreatingError', error)
        } finally {
            commit('setCreatingFriendship', false)
        }
    }
}
