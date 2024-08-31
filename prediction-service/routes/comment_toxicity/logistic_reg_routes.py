from flask import Blueprint, request, jsonify
from models.comment_toxicity.logistic_regression import LogisticRegressionModel

logistic_regression_bp = Blueprint('logistic_regression_bp', __name__)

# Instantiate models for different versions
lr_model_v1 = LogisticRegressionModel(version='v1')
# lr_model_v2 = LogisticRegressionModel(version='v2')
# Add more versions as needed

# A dictionary to map versions to their corresponding model instances
model_versions = {
    'v1': lr_model_v1,
    # 'v2': lr_model_v2,
    # Add more versions as needed
}

@logistic_regression_bp.route('/ct/lr/<version>/predict', methods=['POST'])
@logistic_regression_bp.route('/ct/lr/predict', methods=['POST'])  # Route without version, defaults to v1
def predict(version=None):
    # Default to v1 if version is not provided
    version = version or 'v1'
    
    if version not in model_versions:
        return jsonify({'error': 'Invalid version specified'}), 400

    try:
        data = request.json
        comment = data.get('comment', None)
        if comment is None or comment == "":
            return jsonify({'error': 'comment is required'}), 400

        # Get the model for the specified version
        lr_model = model_versions[version]

        # Get the prediction from the model
        prediction = lr_model.predict(comment)
        
        # Convert ndarray to list for JSON serialization
        prediction_list = prediction.tolist()[0]
        
        # Check the length of prediction_list to avoid index errors
        if len(prediction_list) < 6:
            raise ValueError("Prediction list has fewer elements than expected: " + str(len(prediction_list)) + str(prediction_list))
        
        # Map the predictions to their respective labels
        prediction_dict = {
            'toxic': prediction_list[0],
            'severe_toxic': prediction_list[1],
            'obscene': prediction_list[2],
            'threat': prediction_list[3],
            'insult': prediction_list[4],
            'identity_hate': prediction_list[5]
        }

        return jsonify({
            'prediction': prediction_dict,
            'comment': comment,
        }), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400
