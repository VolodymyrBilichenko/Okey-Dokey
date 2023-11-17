import axios from "axios";
import {getApi} from "./getApi";

export async function getAllPrograms() {
    try{
        const response = await axios.get(getApi('/api/course/'));
        return response.data;
    } catch (error) {
        console.error('Error fetching all programs:', error);
        throw error;
    }
}

export async function getAllFaq() {
    try{
        const response = await axios.get(getApi('/api/base/faq/'));
        return response.data;
    } catch (error) {
        console.error('Error fetching all faq:', error);
        throw error;
    }
}

export async function getAllContacts() {
    try{
        const response = await axios.get(getApi('/api/base/contacts/'));
        return response.data;
    } catch (error) {
        console.error('Error fetching all contacts:', error);
        throw error;
    }
}

export async function getAllBlogs() {
    try{
        const response = await axios.get(getApi('/api/blog/'));
        return response.data;
    } catch (error) {
        console.error('Error fetching all blogs:', error);
        throw error;
    }
}
