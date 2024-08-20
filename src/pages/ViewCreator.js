import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import "./ViewCreator.css"

export const ViewCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) throw error;
        setCreator(data);
      } catch (error) {
        console.error('Error fetching creator:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit-creator/${id}`);
  };

  const handleDelete = async () => {
    try {
      await supabase.from('creators').delete().eq('id', id);
      navigate('/');
    } catch (error) {
      console.error('Error deleting creator:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!creator) return <p>Creator not found.</p>;

  return (
    <div className="view-creator">
      <h1>View Creator</h1>
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} className="creator-image" />
      )}

      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
