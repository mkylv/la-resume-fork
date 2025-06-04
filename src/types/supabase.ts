export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      education: {
        Row: {
          id: string;
          user_id: string | null;
          school: string | null;
          degree: string | null;
          field: string | null;
          start_date: string | null;
          end_date: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          school?: string | null;
          degree?: string | null;
          field?: string | null;
          start_date?: string | null;
          end_date?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          school?: string | null;
          degree?: string | null;
          field?: string | null;
          start_date?: string | null;
          end_date?: string | null;
        };
      };
      experiences: {
        Row: {
          id: string;
          user_id: string | null;
          position: string | null;
          company: string | null;
          start_date: string | null;
          end_date: string | null;
          description: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          position?: string | null;
          company?: string | null;
          start_date?: string | null;
          end_date?: string | null;
          description?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          position?: string | null;
          company?: string | null;
          start_date?: string | null;
          end_date?: string | null;
          description?: string | null;
        };
      };
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          phone: string | null;
          summary: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          full_name?: string | null;
          phone?: string | null;
          summary?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          phone?: string | null;
          summary?: string | null;
          created_at?: string | null;
        };
      };
      skills: {
        Row: {
          id: string;
          user_id: string | null;
          name: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          name?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          name?: string | null;
        };
      };
    };
  };
}
