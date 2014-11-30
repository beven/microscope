/**
 * Created by blee on 30/11/2014.
 */

ownsDocument = function(userId, doc) {
    return doc && doc.userId == userId;
};