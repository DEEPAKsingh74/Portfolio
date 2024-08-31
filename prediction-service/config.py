class Config:
    DEBUG = True
    MODEL_PATH = 'pretrained_models'

class ProductionConfig(Config):
    DEBUG = False

class DevelopmentConfig(Config):
    DEBUG = True

class TestingConfig(Config):
    DEBUG = True
    TESTING = True
