// src/images/index.ts

// Import tất cả các file ảnh trong thư mục này
function importAll(r: any): string[] {
    return r.keys().map((item: string) => r(item));
}

// Export một mảng chứa tất cả các ảnh
export const images: string[] = importAll((require as any).context(".", false, /\.(png|jpe?g|svg)$/));
