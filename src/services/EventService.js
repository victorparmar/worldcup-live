/**
 * Stupid simple redux implementation without a global store
 */

export const EventNames = {
  ON_DATA_UPDATE: "onDataUpdate",
  ON_REFRESH_DATA_REQUEST_IN_PROGRESS: "onRefreshDataRequestInProgress",
  ON_REFRESH_DATA_REQUEST_DONE: "onRefreshDataRequestDone",
  ON_REFRESH_DATA_REQUEST_FAILED: "onRefreshDataRequestFailed"
};

const EventService = {
  callbacks: {
    onDataUpdate: {},
    onRefreshDataRequestInProgress: {},
    onRefreshDataRequestDone: {}
  },
  /**
   * @param {string} eventName
   * @param {*} data
   */
  triggerEvent(eventName, data = null) {
    if (this.callbacks[eventName]) {
      Object.keys(this.callbacks[eventName]).forEach(id => {
        this.callbacks[eventName][id](data);
      });
    }
  },

  /**
   * @param {string} eventName name of event
   * @param {string} id callback identifier
   * @param {Function} callback
   */
  listenEvent(eventName, id, callback) {
    this.callbacks[eventName][id] = callback;
  },

  /**
   * @param {string} eventName name of event
   * @param {string} id callback identifier
   */
  unlistenEvent(eventName, id) {
    delete this.callbacks[eventName][id];
  }
};

export default EventService;
