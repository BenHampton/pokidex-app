export default {
    setRelationshipLoading(state, isLoading) {
        state.relationship_loading = isLoading
    },
    setRelationshipError(state, error) {
        state.relationship_error = error
    },

    setFriendshipUpdating(state, isUpdating) {
        state.relationship_isUpdating = isUpdating
    },
    setFriendshipUpdatingError(state, error) {
        state.relationship_error = error
    },

    setCreatingFriendship(state, isCreating) {
        state.relationship_isCreating = isCreating
    },
    setFriendshipCreatingError(state, error) {
        state.creatingRelationship_error = error
    }
}
