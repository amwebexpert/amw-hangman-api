class EnvUtils {
    isDev(): boolean {
        return process.env.NODE_ENV === 'development';
    }

    isProd(): boolean {
        return process.env.NODE_ENV === 'production';
    }
}

export const envUtils = new EnvUtils();
